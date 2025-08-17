import { Exercise } from './exerciseService';
import { textoJornalisticoExercicio1Complemento } from './jornalisticoModule1';
import { textoJornalisticoExercicio2Complemento } from './jornalisticoModule2';
import { textoJornalisticoExercicio3Complemento } from './jornalisticoModule3';
import { textoJornalisticoExercicio4Complemento } from './jornalisticoModule4';
import { textoJornalisticoExercicio5Complemento } from './jornalisticoModule5Consolidado';

// Exporta todos os exercícios complementares para facilitar a integração
export {
  textoJornalisticoExercicio1Complemento,
  textoJornalisticoExercicio2Complemento,
  textoJornalisticoExercicio3Complemento,
  textoJornalisticoExercicio4Complemento,
  textoJornalisticoExercicio5Complemento
};

// Função para obter todos os exercícios complementares de um determinado módulo
export function getComplementoExercises(moduleId: string): Exercise[] {
  switch (moduleId) {
    case 'interpretacao-jornalistico-1':
      return textoJornalisticoExercicio1Complemento;
    case 'interpretacao-jornalistico-2':
      return textoJornalisticoExercicio2Complemento;
    case 'interpretacao-jornalistico-3':
      return textoJornalisticoExercicio3Complemento;
    case 'interpretacao-jornalistico-4':
      return textoJornalisticoExercicio4Complemento;
    case 'interpretacao-jornalistico-5':
      return textoJornalisticoExercicio5Complemento;
    default:
      return [];
  }
}
