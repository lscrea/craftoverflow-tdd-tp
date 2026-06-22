import { validateQuestionDraft } from './question-draft';
 
describe('validateQuestionDraft', () => {
  it('accepte un brouillon valide', () => {
    const result = validateQuestionDraft({
      title: 'Comment tester un formulaire React sans le fragiliser ?',
      body: 'Je veux écrire un test utilisateur fiable avec React Testing Library.',
      tags: ['react', 'testing'],
    });
    expect(result).toEqual({ ok: true });
  });
});
