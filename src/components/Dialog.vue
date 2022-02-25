<template>
  <v-layout row justify-center>
    <v-dialog
      v-if="props"
      :data-cy="props.componenteId"
      v-model="dialog"
      :width="props.width"
      :height="props.height"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          class="btn-custom fill"
          :dark="!props.desativado"
          :color="corBotaoPrincipal"
          :data-cy="`${props.componenteId}-btn`"
          :disabled="props.desativado"
          :loading="props.carregando"
        >
          {{ props.textoBotaoPrincipal }}
        </v-btn>
      </template>
      <v-card>
        <v-card-title
          class="d-flex flex-row justify-center title-container py-2 ma-0"
          :style="estiloBackground"
        >
          <span class="text text-title" :style="`color: ${corTextoTitulo}`">
            {{ props.titulo }}
          </span>
        </v-card-title>
        <div class="divider-rectangle" />
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-checkbox v-if="this.props.checkbox"> Independente </v-checkbox>
              <v-flex xs12 sm11 md>
                <div class="px-28" :data-cy="`${props.componenteId}-card`">
                  <v-card-text class="d-flex flex-row justify-center pa-0">
                    <span
                      v-html="props.mensagem"
                      class="text text-content content-container mt-custom-26 mb-6 pa-0"
                    ></span>
                  </v-card-text>
                </div>
                <v-flex xs12 sm9 md19>
                  <v-card-text></v-card-text>
                </v-flex>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions class="d-flex flex-row justify-center pa-0">
          <v-spacer></v-spacer>
          <v-btn
            class="text btn-text btn-cancel btn-custom px-3 mr-13"
            text
            @click="cancelar()"
            :data-cy="`${props.componenteId}-btn-cancelar`"
          >
            {{ props.textoBotaoCancelar }}
          </v-btn>
          <v-btn
            class="text btn-text btn-confirm btn-custom ml-0 px-3 py-custom-10"
            :color="corBotaoConfirmar"
            :aria-label="props.textoBotaoConfimar"
            @click="confirmar()"
            :data-cy="`${props.componenteId}-btn-confirmar`"
            :loading="props.carregando"
          >
            {{ props.textoBotaoConfimar }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import IDialogConfirmacaoProps from "./IDialogConfirmacaoProps";
import { Cores } from "./Cores";

@Component
export default class DialogConfirmacao extends Vue {
  @Prop()
  public props!: IDialogConfirmacaoProps;
  public dialog = false;

  public get cor(): string {
    return this.props.cor || Cores.Critical;
  }

  public get corBotaoPrincipal(): string | null {
    return this.props.corBotaoPrincipal || Cores.Primary;
  }

  public get corBotaoConfirmar(): string {
    return this.props.corBotaoConfirmar || this.cor;
  }

  public get corTextoTitulo(): string {
    return this.props.corTextoTitulo || this.cor;
  }

  public get estiloBackground(): string {
    return `background-color: ${this.cor}`;
  }

  public confirmar(): void {
    this.props.carregando = true;
    this.props.checkbox = true;
    this.dialog = false;
    this.$emit("confirmar");
  }

  public cancelar(): void {
    this.dialog = false;
    this.$emit("cancelar");
  }
}
</script>

<style scoped>
.text {
  font-family: Roboto, Arial, sans-serif;
  font-style: normal;
}

.text-title {
  font-weight: bold;
  font-size: 16px;
  line-height: 150%;
  color: #ffffff;
}

.text-content {
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #656565;
}

.btn-text {
  letter-spacing: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
}

.btn-confirm {
  color: #ffffff;
}

.btn-cancel {
  color: #2f54d3;
}

.btn-custom {
  text-transform: unset;
}

.fill {
  width: 100%;
  height: 100% !important;
}

.content-container {
  text-align: center;
}

.mt-custom-26 {
  margin-top: 26px;
}

.divider-rectangle {
  background-color: rgba(196, 196, 196, 1);
  height: 2px;
}
</style>
