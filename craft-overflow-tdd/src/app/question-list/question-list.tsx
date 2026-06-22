import type { QuestionSummary } from "../../core/question/domain/question";

 
type Props = {
  status: 'loading' | 'success' | 'error';
  questions: QuestionSummary[];
};
 
export function QuestionList({ status, questions }: Props) {
  if (status === 'loading') {
    return <p role="status">Chargement des questions...</p>;
  }
  return <section aria-label="Liste des questions">{questions.length} question(s)</section>;
}
