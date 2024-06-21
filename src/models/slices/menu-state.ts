import { IResponseMenu } from '../response/menu';

export interface MenuState {
  items: IResponseMenu[];
  itemsBKP: IResponseMenu[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}
