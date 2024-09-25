import type { HttpClient, ID, NoId } from '@common/types';
import type { Project } from '@project';
import type { AxiosResponse } from 'axios';

import { projectPreviewTransformer, projectTransformer } from './transformers';
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

  public async getAll() {
    const { data } = await this.client.get<TransmissibleProjectPreview[]>(
      this.basePath,
    );
    return data?.map(projectPreviewTransformer);
  }

  public async get(id: ID) {
    const { data } = await this.client.get<TransmissibleProject>(
      `${this.basePath}/${id}`,
    );
    return projectTransformer(data);
  }

  public async create(input: Omit<Project, 'createdAt' | 'id'>) {
    const { data } = await this.client.post<
      NoId<TransmissibleProject>,
      AxiosResponse<TransmissibleProjectPreview>
    >(this.basePath, {
      created_at: Math.floor(Date.now() / 1000),
      description: input.description,
      name: input.name,
    });
    return projectPreviewTransformer(data);
  }
}
