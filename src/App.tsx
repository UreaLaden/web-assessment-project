import * as React from "react";
import { styles } from "./styles";
import { ActionButton, ChoiceGroup, IChoiceGroupOption } from "@fluentui/react";

interface iQuestion {
  id: number;
  query: string;
  response: number;
}

const App: React.FC = () => {
  const [questions, setQuestions] = React.useState<iQuestion[]>([]);
  const [questionNumber, setQuestionNumber] = React.useState<number>(1);
  const [response, setResponse] = React.useState<iQuestion[]>([]);

  React.useEffect(() => {
    fetch("questions.json")
      .then((response) => response.json())
      .then((data: iQuestion[]) => {
        setQuestions(data);
      })
      .catch((error) => {
        console.error("Error fetching JSON: ", error);
      });
  }, []);
  const Questions = React.useMemo(() => {
    return questions.map((q: iQuestion, idx: number) => {
      return <div key={idx}>{q.query}</div>;
    });
  }, [questions]);

  const responseOptions: IChoiceGroupOption[] = [
    { key: "1", text: "1" },
    { key: "2", text: "2" },
    { key: "3", text: "3" },
    { key: "4", text: "4" },
    { key: "5", text: "5" },
  ];

  const CurrentQuestion = React.useMemo(() => {
    return questions.find((q, idx) => q.id === questionNumber);
  }, [questions, questionNumber]);
  const buttonText = React.useMemo(() => {
    if (!CurrentQuestion) return "Error";
    if (CurrentQuestion.id === questions.length - 1) return "Submit";
    return "Next";
  }, [CurrentQuestion, questions]);

  const onOptionSelected = (
    ev?: React.FormEvent<HTMLElement | HTMLInputElement>,
    option?: IChoiceGroupOption | undefined
  ) => {
    console.log(option);
  };

  const onActionButtonClicked = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (questionNumber < questions.length - 1) {
      setQuestionNumber(questionNumber + 1);
    }
  };

  return (
    <div className={styles.appContainer}>
      {CurrentQuestion && (
        <div className={styles.cardContainer}>
          <div>{CurrentQuestion.query}</div>
          <ChoiceGroup options={responseOptions} onChange={onOptionSelected} />
          <ActionButton text={buttonText} onClick={onActionButtonClicked} />
        </div>
      )}
    </div>
  );
};

export default App;
