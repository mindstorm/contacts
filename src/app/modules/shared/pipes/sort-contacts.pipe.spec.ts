import { Contact } from 'src/app/models';
import { SortContactsPipe } from './sort-contacts.pipe';

describe('SortPipe', () => {
  let pipe: SortContactsPipe;

  const unsortValues: Contact[] = [
    { firstName: 'Max', lastName: 'Z', phone: '', email: '', address: '', uuid: '' },
    { firstName: 'Max', lastName: 'A', phone: '', email: '', address: '', uuid: '' },
    { firstName: 'Max', lastName: 'M', phone: '', email: '', address: '', uuid: '' },
  ];

  beforeEach(() => {
    pipe = new SortContactsPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should sort the contacts on lastname', () => {
    let sortedValues = pipe.transform(unsortValues);

    expect(sortedValues[0].lastName).toBe('A');
    expect(sortedValues[2].lastName).toBe('Z');
  });
});
