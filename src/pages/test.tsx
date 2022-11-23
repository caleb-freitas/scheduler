import { type NextPage } from "next";

import { trpc } from "../utils/trpc";

const Test: NextPage = () => {
  const { data } = trpc.example.getAllProtected.useQuery();

  return (
    <>
      <div>
        {data?.map((question) => {
          return <div key={question.id}>{question.title}</div>;
        })}
      </div>
    </>
  );
};

export default Test;
