import {render, screen, waitFor} from "@testing-library/react"
import TodoApp from "../components/TodoApp"
import userEvent from "@testing-library/user-event";

describe(
  'addNewTask', () => {
    it('new task input is working' , async () => {
      render(<TodoApp />);
      const input = screen.getByTestId('my-input');
      expect(screen.queryByRole('list')).toBeNull();
      userEvent.type(input, 'React');
      userEvent.keyboard('{Enter}')
      let list
      await waitFor(() => {
        list = screen.getByRole('list')
      })
      expect(list).toBeInTheDocument();
      expect(list).toContainElement(screen.getByText('React'));
    })
  }
)