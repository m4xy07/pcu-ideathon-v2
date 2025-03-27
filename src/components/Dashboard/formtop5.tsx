"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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

// Generate an array of 50 team names dynamically
const teams = Array.from({ length: 50 }, (_, i) => `Team ${i + 1}`);

// Create a dynamic Zod schema to enforce team selection
const FormSchema = z.object({
  firstChoice: z.enum(teams as [string, ...string[]], {
    required_error: "Kindly select your first favorite team.",
  }),
  secondChoice: z.enum(teams as [string, ...string[]], {
    required_error: "Kindly select your second favorite team.",
  }),
  thirdChoice: z.enum(teams as [string, ...string[]], {
    required_error: "Kindly select your third favorite team.",
  }),
  fourthChoice: z.enum(teams as [string, ...string[]], {
    required_error: "Kindly select your fourth favorite team.",
  }),
  fifthChoice: z.enum(teams as [string, ...string[]], {
    required_error: "Kindly select your fifth favorite team.",
  }),
});

type ChoiceType = "firstChoice" | "secondChoice" | "thirdChoice" | "fourthChoice" | "fifthChoice";

export function RadioGroupFormTop5() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstChoice: undefined,
      secondChoice: undefined,
      thirdChoice: undefined,
      fourthChoice: undefined,
      fifthChoice: undefined,
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full lg:w-2/3 text-center space-y-6 items-center justify-center mx-auto">
        {["firstChoice", "secondChoice", "thirdChoice", "fourthChoice", "fifthChoice"].map((choice, index) => {
          const choiceKey = choice as ChoiceType;
          return (
            <FormField
              key={choiceKey}
              control={form.control}
              name={choiceKey}
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <div className="pt-8" />
                  <FormLabel className="text-lg">
                    {index === 0 && "Which team did you like the most?"}
                    {index === 1 && "Which team did you like the second most?"}
                    {index === 2 && "Which team did you like the third most?"}
                    {index === 3 && "Which team did you like the fourth most?"}
                    {index === 4 && "Which team did you like the fifth most?"}
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={(value) => {
                        field.onChange(value);
                        handleSelection(choiceKey, value);
                      }}
                      value={field.value}
                      className="grid grids-col-2 md:grid-cols-5 gap-4"
                    >
                      {teams.map((team) => (
                        <FormItem key={team} className="flex items-center w-fit space-x-2">
                          <FormControl>
                            <RadioGroupItem
                              value={team}
                              disabled={
                                Object.values(selectedTeams).includes(team) && selectedTeams[choiceKey] !== team
                              }
                            />
                          </FormControl>
                          <FormLabel
                            className={`font-normal text-base ${
                              Object.values(selectedTeams).includes(team) && selectedTeams[choiceKey] !== team
                                ? "text-gray-400"
                                : ""
                            }`}
                          >
                            {team}
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
        <div className="w-fit flex items-center justify-center mx-auto">
          <Buttonmain type="submit">Submit</Buttonmain>
        </div>
      </form>
    </Form>
  );
}