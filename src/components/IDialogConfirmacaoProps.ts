import { Cores } from "./Cores";
import IPropsBase from "./IPropsBase";

export default interface IDialogConfirmacaoProps extends IPropsBase {
  textoBotaoConfimar: string;
  textoBotaoCancelar: string;
  mensagem: string;
  mensagemDestaque?: string[];
  titulo: string;
  textoBotaoPrincipal: string;
  corBotaoPrincipal?: string;
  cor?: Cores;
  corBotaoConfirmar?: Cores;
  corTextoTitulo?: Cores;
  width?: number;
  height?: number;
  carregando?: boolean;
  desativado?: boolean;
  checkbox?: boolean;
}
