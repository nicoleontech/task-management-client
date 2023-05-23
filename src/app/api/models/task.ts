/* tslint:disable */
/* eslint-disable */
export interface Task {
  categoryName: string;
  description?: string;
  dueDate?: string;
  priority?: 'high' | 'medium' | 'low';

  /**
   * Task Status
   */
  status?: 'open' | 'ongoing' | 'completed' | 'overdue';
  taskId?: number;
  title: string;
}
