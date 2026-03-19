import { PlayCircleIcon, StopCircleIcon, Coffee, AlertCircle } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import styles from "./styes.module.css"

export function MainForm() {
  return (
    <form className={styles.form}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          <span className={styles.titleIcon}>🍅</span>
          Novo Ciclo
        </h2>
        <div className={styles.badge}>
          <span className={styles.badgeDot}></span>
          Pronto para começar
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.inputGroup}>
          <DefaultInput
            labelText="O que você vai fazer?"
            id="taskInput"
            type="text"
            placeholder="Ex: Estudar React, Ler um livro..."
          />
          <div className={styles.inputHint}>
            <AlertCircle size={14} />
            <span>Seja específico para melhor foco</span>
          </div>
        </div>

        <div className={styles.divider}>
          <span className={styles.dividerLine}></span>
          <Coffee className={styles.dividerIcon} size={20} />
          <span className={styles.dividerLine}></span>
        </div>

        <div className={styles.infoCard}>
          <div className={styles.infoIcon}>⏳</div>
          <div className={styles.infoContent}>
            <strong>Dica do dia:</strong>
            <p>25 minutos de foco, 5 minutos de pausa. Você consegue!</p>
          </div>
        </div>

        <div className={styles.cyclesWrapper}>
          <Cycles />
        </div>
      </div>

      <div className={styles.actions}>
        <DefaultButton 
          icon={<PlayCircleIcon />} 
          color="green"
          className={styles.actionButton}
        >
          Iniciar Ciclo
        </DefaultButton>
        <DefaultButton 
          icon={<StopCircleIcon />} 
          color="red"
          className={styles.actionButton}
        >
          Interromper
        </DefaultButton>
      </div>
    </form>
  );
}