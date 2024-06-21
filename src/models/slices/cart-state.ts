import { IResponseMenu } from '../response/menu';

export interface CartState {
  items: IResponseMenu[];
  selectedTotal: number;
}
