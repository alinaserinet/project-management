import type { HttpClient } from '@common/types';
import { projectPreviewTransformer } from '@project/services/transformers.ts';

import type { TransmissibleProjectPreview } from './types';

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
}
