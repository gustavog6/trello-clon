export interface ToDo {
  id: string | null;
  title: string | null;
}

export interface Column {
  title: string | null;
  todos: ToDo[];
}