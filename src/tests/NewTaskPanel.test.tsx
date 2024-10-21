import { render, screen, waitFor } from "@testing-library/react";
import NewTaskPanel from "../components/NewTaskPanel";
import TasksProvider from "../Providers/TasksProvider";
import userEvent from "@testing-library/user-event";

describe(
  'test NewTaskPanel',
  () => {
    it('NewTaskPanel renders', () => {
      render(
        <TasksProvider>
          <NewTaskPanel />
        </TasksProvider>
      )
      const taggleAllButton = screen.getByTestId('toggle-all-button')
      const input = screen.getByTestId('my-input')
      expect(taggleAllButton).toBeInTheDocument()
      expect(input).toBeInTheDocument();
      expect(input).toHaveValue('');
    })

    it('typing successfull', async () => {
      render(
        <TasksProvider>
          <NewTaskPanel />
        </TasksProvider>
      )
      const input = screen.getByTestId('my-input');
      userEvent.type(input, 'testing');
      expect(input).toHaveValue('testing');
      userEvent.keyboard('{Enter}');
      await waitFor(() => {
        expect(screen.getByTestId('my-input')).toHaveValue('')
      })
    })
  }
)