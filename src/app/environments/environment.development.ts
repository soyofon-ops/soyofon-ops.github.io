import { Environment } from 'src/app/models/environment.model';
import { API_NAME } from '../enum/api.enum';

export const environments: Environment = {
  api: {
    [API_NAME.Sitemap]: '/assets/json/sitemap.json',
  },
};
