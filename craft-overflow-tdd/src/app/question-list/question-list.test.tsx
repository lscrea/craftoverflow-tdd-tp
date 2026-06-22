import { render, screen } from '@testing-library/react';
import { QuestionList } from './question-list';
 
it('indique que les questions sont en cours de chargement', () => {
  render(<QuestionList status="loading" questions={[]} />);
 
  expect(screen.getByRole('status')).toHaveTextContent('Chargement des questions');
});