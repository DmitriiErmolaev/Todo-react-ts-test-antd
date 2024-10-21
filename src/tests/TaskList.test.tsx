import { render, screen } from "@testing-library/react"
import TaskList from "../components/TaskList"
import TasksProvider from "../Providers/TasksProvider"

describe(
  'taskList',
  () => {
    it('TaskList not render if there are no tasks', () => {
      render(
        <TasksProvider>
          <TaskList />
        </TasksProvider>
      )
      expect(screen.queryByRole("list")).toBeNull();
    })
  }
)