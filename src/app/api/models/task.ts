/* tslint:disable */
/* eslint-disable */
export interface Task {
  category?: any;
  description: string;
  dueDate?: string;
  priority?: 'high' | 'medium' | 'low';

  /**
   * Task Status
   */
  status?: 'open' | 'ongoing' | 'completed' | 'overdue';
  taskId: number;
  title: string;
  // hotfix change
}
