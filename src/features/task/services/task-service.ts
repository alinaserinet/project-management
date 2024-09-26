/* eslint-disable camelcase */
import type { HttpClient, ID, NoId } from '@common/types';
import { TaskStatus } from '@task/enums';
import {
  taskPreviewTransformer,
  taskTransformer,
} from '@task/services/transformers';
import type {
  TransmissibleTask,
  TransmissibleTaskPreview,
} from '@task/services/types';
import type { Task } from '@task/types';
import type { AxiosResponse } from 'axios';

export class TaskService {
  public constructor(
    private readonly client: HttpClient,
    private readonly basePath: string,
  ) {}

  public async getAll(signal?: AbortSignal) {
    const { data } = await this.client.get<TransmissibleTaskPreview[]>(
      this.basePath,
      { signal },
    );
    return data?.map(taskPreviewTransformer);
  }

  public async get(id: ID, signal?: AbortSignal) {
    const { data } = await this.client.get<TransmissibleTask>(
      `${this.basePath}/${id}`,
      { signal },
    );
    return taskTransformer(data);
  }

  public async create(
    input: Omit<Task, 'createdAt' | 'id' | 'status'>,
    signal?: AbortSignal,
  ) {
    const { data } = await this.client.post<
      NoId<TransmissibleTask>,
      AxiosResponse<TransmissibleTaskPreview>
    >(
      this.basePath,
      {
        created_at: Math.floor(Date.now() / 1000),
        description: input.description || null,
        title: input.title,
        project_id: input.project.id,
        status: TaskStatus.ToDo,
        date: input.date,
      },
      { signal },
    );
    return taskPreviewTransformer(data);
  }

  public async delete(id: ID, signal?: AbortSignal) {
    const { data } = await this.client.delete<TransmissibleTaskPreview>(
      `${this.basePath}/${id}`,
      { signal },
    );
    return data;
  }
}
