import { createSection } from './section';
import { TextBox } from '../../src';

export default (container: HTMLElement) => {
  const textboxSection = createSection('Textbox').appendTo(container);

  const txt1 = new TextBox({ value: 'hello' });
  txt1.on('input', () => console.log('txt1 (input):', txt1.getValue()));
  txt1.on('change', () => console.log('txt1 (changed):', txt1.getValue()));
  textboxSection.appendChild(txt1.render());

  const txt2 = new TextBox({ isDisabled: true });
  txt2.setValue('disabled textbox');
  textboxSection.appendChild(txt2.render());
};
