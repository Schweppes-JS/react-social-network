import React from 'react';
import { create, act } from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe("ProfileStatus component", () => {
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="Stadying hard" />);
    const instance = component.root;
    expect(instance.props.status).toBe("Stadying hard");
  });

  test("after creation span with status should be displayed", () => {
    const component = create(<ProfileStatus status="Stadying hard" />);
    const instance = component.root;
    const span = instance.findByType("span");
    expect(span).not.toBeNull();
  });

  test("after creation input shouldn't be displayed", () => {
    const component = create(<ProfileStatus status="Stadying hard" />);
    const instance = component.root;
    expect(() => {
      const input = instance.findByType("input");
    }).toThrow();
  });

  test("after creation span should contains correct status", () => {
    const component = create(<ProfileStatus status="Stadying hard" />);
    const instance = component.root;
    const span = instance.findByType("span");
    expect(span.children[0]).toBe("Stadying hard");
  });

  test("input should be displayed in editMode insted of span", () => {
    const component = create(<ProfileStatus status="Stadying hard" />);
    const instance = component.root;
    const span = instance.findByType("span");
    act(() => {
      span.props.onDoubleClick(); 
    });
    const input = instance.findByType("input");
    expect(input.props.value).toBe("Stadying hard");
  });


  test("callbck should be called ", () => {
    const mockCall = jest.fn();
    const component = create(<ProfileStatus status="Stadying hard" updateStatus={mockCall}/>);
    const instance = component.root;
    const span = instance.findByType("span");
    act(() => {
      span.props.onDoubleClick(); 
    });
    const input = instance.findByType("input");
    act(() => {
      input.props.onBlur();
    });
    expect(mockCall.mock.calls.length).toBe(1);
  });
});