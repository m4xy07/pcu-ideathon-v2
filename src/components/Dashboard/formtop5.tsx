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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/selectcore";
import Buttonmain from "../Buttonmain";
import { useState } from "react";

const teams = Array.from({ length: 50 }, (_, i) => `Team ${i + 1}`);

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

export function SelectFormTop5() {
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full lg:w-2/3 text-center space-y-6 items-center justify-center mx-auto flex flex-col">
        {[
          "firstChoice",
          "secondChoice",
          "thirdChoice",
          "fourthChoice",
          "fifthChoice",
        ].map((choice, index) => {
          const choiceKey = choice as ChoiceType;
          return (
            <FormField
              key={choiceKey}
              control={form.control}
              name={choiceKey}
              render={({ field }) => (
                <FormItem className="space-y-3 w-full flex flex-col items-center">
                  <div className="pt-8" />
                  <FormLabel className="text-lg text-center">
                    {index === 0 && "Which team did you like the most?"}
                    {index === 1 && "Which team did you like the second most?"}
                    {index === 2 && "Which team did you like the third most?"}
                    {index === 3 && "Which team did you like the fourth most?"}
                    {index === 4 && "Which team did you like the fifth most?"}
                  </FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                        handleSelection(choiceKey, value);
                      }}
                      value={field.value}
                    >
                      <SelectTrigger className="w-full md:w-80 bg-black border border-white/15 rounded-md shadow-sm">
                        <SelectValue placeholder="Select a team" />
                      </SelectTrigger>
                      <SelectContent className="bg-black border border-white/15 rounded-md shadow-md">
                        <SelectGroup>
                          {teams.map((team) => (
                            <SelectItem
                              key={team}
                              value={team}
                              disabled={
                                Object.values(selectedTeams).includes(team) && selectedTeams[choiceKey] !== team
                              }
                              className="transition-all duration-300 hover:bg-white/15 cursor-pointer"
                            >
                              {team}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
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
