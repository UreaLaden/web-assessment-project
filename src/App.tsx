import * as React from "react";
import { styles } from "./styles";
import { ActionButton, ChoiceGroup, IChoiceGroupOption } from "@fluentui/react";
import Web from "./Web";

interface iQuestion {
  id: number;
  query: string;
  response: number;
}

interface iQuestionResponse {
  questionNumber: number;
  responseNumber: number;
}

const App: React.FC = () => {
  const [questions, setQuestions] = React.useState<iQuestion[]>([]);
  const [questionNumber, setQuestionNumber] = React.useState<number>(1);
  const [currentResponseNumber, setCurrentResponseNumber] = React.useState(-1);
  const [responses, setResponses] = React.useState<iQuestionResponse[]>([]);
  const [selectedOption, setSelectedOption] = React.useState<string | null>("");
  const [showGraph, setShowGraph] = React.useState(false);

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

  const responseOptions: IChoiceGroupOption[] = React.useMemo(
    () => [
      { key: "1", text: "1" },
      { key: "2", text: "2" },
      { key: "3", text: "3" },
      { key: "4", text: "4" },
      { key: "5", text: "5" },
    ],
    []
  );

  const CurrentQuestion = React.useMemo(() => {
    return questions.find((q, idx) => q.id === questionNumber);
  }, [questions, questionNumber]);

  const buttonText = React.useMemo(() => {
    if (!CurrentQuestion) return "Error";
    if (CurrentQuestion.id === questions.length) return "Submit";
    return "Next";
  }, [CurrentQuestion, questions]);

  const onOptionSelected = (
    ev?: React.FormEvent<HTMLElement | HTMLInputElement>,
    option?: IChoiceGroupOption | undefined
  ) => {
    const key = option?.key;
    if (!key) return;
    setSelectedOption(key);
    setCurrentResponseNumber(parseInt(key));
  };

  const onActionButtonClicked = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setQuestionNumber(questionNumber + 1);
      if (currentResponseNumber > 0) {
        const response: iQuestionResponse = {
          questionNumber: questionNumber,
          responseNumber: currentResponseNumber,
        };
        setResponses((prev) => [...prev, response]);
      }
      if (questionNumber === questions.length) {
        setShowGraph(true);
      }
      setSelectedOption(null);
      setCurrentResponseNumber(-1);
    },
    [questionNumber, questions, currentResponseNumber]
  );

  const RenderedCard = React.useMemo(() => {
    return (
      CurrentQuestion && (
        <div className={styles.cardContainer}>
          <div className={styles.cardText}>{`${questionNumber}. ${CurrentQuestion.query}`}</div>
          <ChoiceGroup
            options={responseOptions}
            onChange={onOptionSelected}
            selectedKey={selectedOption}
          />
          <ActionButton
            text={buttonText}
            onClick={onActionButtonClicked}
            disabled={selectedOption === null}
          />
        </div>
      )
    );
  }, [
    CurrentQuestion,
    selectedOption,
    onActionButtonClicked,
    buttonText,
    responseOptions,
    questionNumber,
  ]);

  return (
    <div className={styles.appContainer}>
      {showGraph ? (
        <div className={styles.graphContainer}>
          <Web selections={responses} />
        </div>
      ) : (
        RenderedCard
      )}
    </div>
  );
};

export default App;
