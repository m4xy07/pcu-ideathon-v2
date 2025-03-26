"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/formcore";
import { RadioGroup, RadioGroupItem } from "@/components/Dashboard/radiogroup";
import Buttonmain from "../Buttonmain";
import { useState } from "react";

const FormSchema = z.object({
  firstChoice: z.enum(["one", "two", "three", "four", "five"], {
    required_error: "Kindly select your first favorite team.",
  }),
  secondChoice: z.enum(["one", "two", "three", "four", "five"], {
    required_error: "Kindly select your second favorite team.",
  }),
  thirdChoice: z.enum(["one", "two", "three", "four", "five"], {
    required_error: "Kindly select your third favorite team.",
  }),
});

type ChoiceType = "firstChoice" | "secondChoice" | "thirdChoice";

export function RadioGroupForm() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstChoice: undefined,
      secondChoice: undefined,
      thirdChoice: undefined,
    },
  });

  const [selectedTeams, setSelectedTeams] = useState<{ [key in ChoiceType]?: string }>({});

  const handleSelection = (choice: ChoiceType, value: string) => {
    setSelectedTeams((prev) => ({ ...prev, [choice]: value }));
  };

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 text-left space-y-6">
        {["firstChoice", "secondChoice", "thirdChoice"].map((choice, index) => {
          const choiceKey = choice as ChoiceType;
          return (
            <FormField
              key={choiceKey}
              control={form.control}
              name={choiceKey}
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <div className="pt-2" />
                  <FormLabel className="text-lg">
                    {index === 0 && "Which team did you like the most?"}
                    {index === 1 && "Which team did you like the second most?"}
                    {index === 2 && "Which team did you like the third most?"}
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={(value) => {
                        field.onChange(value);
                        handleSelection(choiceKey, value);
                      }}
                      value={field.value}
                      className="flex flex-col space-y-1"
                    >
                      {["one", "two", "three", "four", "five"].map((team) => (
                        <FormItem key={team} className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value={team} disabled={
                              Object.values(selectedTeams).includes(team) && selectedTeams[choiceKey] !== team
                            } />
                          </FormControl>
                          <FormLabel className={`font-normal text-base ${
                            Object.values(selectedTeams).includes(team) && selectedTeams[choiceKey] !== team
                              ? "text-gray-400"
                              : ""
                          }`}>
                            Team {team}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          );
        })}
        <div className="pt-2" />
        <Buttonmain type="submit">Submit</Buttonmain>
      </form>
    </Form>
  );
}
