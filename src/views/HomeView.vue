<template>
  <div class="home">
    <h1>Home</h1>
    <Dialog
      :props="gerarPropsDialogConfirmacao"
      @confirmar="efetuarReserva()"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import IDialogConfirmacaoProps from "@/components/IDialogConfirmacaoProps";
import Dialog from "@/components/Dialog.vue";
import { Cores } from "@/components/Cores";

@Component({
  components: {
    Dialog,
  },
})
export default class HomeView extends Vue {
  get gerarPropsDialogConfirmacao(): IDialogConfirmacaoProps {
    return {
      componenteId: "dialog-confirmacao",
      textoBotaoConfimar: "Confirmar",
      textoBotaoCancelar: "Cancelar",
      mensagem: `<p style="text-align: left;">Esse RA possui um lan&ccedil;amento de <strong>&Acirc;nima Facilita</strong>, esses benef&iacute;cios n&atilde;o se acumulam na mesma mensalidade. O Bolsa Pra <strong>Voc&ecirc; ser&aacute; aplicado</strong> a partir da primeira mensalidade n&atilde;o financiada.</p> </br></br>
      Deseja encerrar a negociação com o aluno pelo valor</br> <b>R$ 75.00`,
      titulo: "Finalizar negociação para candidato com Ânima Facilita",
      textoBotaoPrincipal: "FINALIZAR NEGOCIAÇÃO",
      cor: Cores.Warning,
      corBotaoConfirmar: Cores.Primary,
      corBotaoPrincipal: Cores.SecondaryPrimary,
      corTextoTitulo: Cores.TextDark,
      width: 478,
      height: 191,
      carregando: false,
      checkbox: true,
    };
  }
}
</script>
