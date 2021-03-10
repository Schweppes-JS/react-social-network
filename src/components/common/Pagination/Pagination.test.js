import React from 'React';
import { create } from 'react-test-renderer';
import Pagination from './Pagination';

describe("Pagination component test", () => {

  test('pages count is 11 but should be showed only 10', () => {
    const component = create(<Pagination totalItemsCount={11} pageSize={1} portionSize={10} />);
    const root = component.root;
    const spans = root.findAllByType("span");
    expect(spans.length).toBe(10);
  });

  test('if pages count is more then 10 button NEXT should be present', () => {
    const component = create(<Pagination totalItemsCount={11} pageSize={1} portionSize={10} />);
    const root = component.root;
    const spans = root.findAllByType("button");
    expect(spans.length).toBe(1);
  });
});