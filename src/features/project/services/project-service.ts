/* eslint-disable camelcase */
import type { HttpClient, ID, NoId } from '@common/types';
import type { Project } from '@project';
import {
  projectPreviewTransformer,
  projectTransformer,
} from '@project/services/transformers';
import type { TransmissibleTaskPreview } from '@task';
import { taskPreviewTransformer } from '@task';
import type { AxiosResponse } from 'axios';

import type {
  TransmissibleProject,
  TransmissibleProjectPreview,
} from './types';

export class ProjectService {
  public constructor(
    private readonly client: HttpClient,
    private readonly basePath: string,
  ) {
    this.getAll = this.getAll.bind(this);
  }

  public async getAll(signal?: AbortSignal) {
    const { data } = await this.client.get<TransmissibleProjectPreview[]>(
      this.basePath,
      { signal },
    );
    return data?.map(projectPreviewTransformer);
  }

  public async get(id: ID, signal?: AbortSignal) {
    const { data } = await this.client.get<TransmissibleProject>(
      `${this.basePath}/${id}`,
      {
        signal,
      },
    );
    return projectTransformer(data);
  }

  public async create(
    input: Omit<Project, 'createdAt' | 'id'>,
    signal?: AbortSignal,
  ) {
    const { data } = await this.client.post<
      NoId<TransmissibleProject>,
      AxiosResponse<TransmissibleProjectPreview>
    >(
      this.basePath,
      {
        created_at: Math.floor(Date.now() / 1000),
        description: input.description,
        name: input.name,
      },
      { signal },
    );
    return projectPreviewTransformer(data);
  }

  public async delete(id: ID, signal?: AbortSignal) {
    const { data } = await this.client.delete<TransmissibleProjectPreview>(
      `${this.basePath}/${id}`,
      {
        signal,
      },
    );
    return data;
  }

  public async getTasks(id: ID, signal?: AbortSignal) {
    const { data } = await this.client.get<TransmissibleTaskPreview[]>(
      `/tasks?project_id=${id}`,
      { signal },
    );
    return data?.map(taskPreviewTransformer);
  }
}
