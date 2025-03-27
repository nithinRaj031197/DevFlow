import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilter from "@/components/filters/HomeFilter";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import Link from "next/link";
import React from "react";

const questions: Question[] = [
  {
    _id: "1",
    title: "How to learn React?",
    content: "I want to learn React, can anyone help me?",
    tags: [
      { _id: "1", name: "React" },
      { _id: "2", name: "JavaScript" },
    ],
    author: { _id: "1", name: "John Doe", image: "/images/default-logo.svg" },
    upvotes: 10,
    downvotes: 2,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
  {
    _id: "2",
    title: "What is the difference between var, let, and const?",
    content: "I am confused about when to use var, let, or const in JavaScript.",
    tags: [
      { _id: "2", name: "JavaScript" },
      { _id: "3", name: "Variables" },
    ],
    author: { _id: "2", name: "Jane Smith", image: "/images/default-logo.svg" },
    upvotes: 25,
    downvotes: 3,
    answers: 8,
    views: 230,
    createdAt: new Date(),
  },
  {
    _id: "3",
    title: "Best practices for using useEffect in React?",
    content: "I often get confused with dependencies in useEffect. What are some best practices?",
    tags: [
      { _id: "1", name: "React" },
      { _id: "4", name: "Hooks" },
    ],
    author: { _id: "3", name: "Alice Johnson", image: "/images/default-logo.svg" },
    upvotes: 18,
    downvotes: 1,
    answers: 3,
    views: 145,
    createdAt: new Date(),
  },
];

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const Home = async ({ searchParams }: SearchParams) => {
  const { query = "" } = await searchParams;

  const filteredQuestions = questions?.filter((question) => question.title.toLowerCase().includes(query?.toLowerCase()));
  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900" asChild>
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>

      <section className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch route="/" imgSrc="/icons/search.svg" placeholder="Search questions..." otherClasses="flex-1" />
      </section>

      <HomeFilter />

      <div className="mt-10 flex w-full flex-col gap-6">
        {filteredQuestions.map((question) => (
          <QuestionCard key={question._id} question={question} />
        ))}
      </div>
    </>
  );
};

export default Home;
