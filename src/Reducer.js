import { CLASS_LIST } from './consts.js';

export function reducer(state, action) {
    switch (action.type) {
      case 'increased_Strength': {
        return {
            ...state,
          Strength: state.Strength,
          Strength: state.Strength + 1
        };
      }
      case 'decreased_Strength': {
        return {
            ...state,
            Strength: state.Strength,
            Strength: state.Strength - 1
        };
      }
      case 'increased_Dexterity': {
        return {
            ...state,
            Dexterity: state.Dexterity,
            Dexterity: state.Dexterity + 1
        };
      }
      case 'decreased_Dexterity': {
        return {
            ...state,
            Dexterity: state.Dexterity,
            Dexterity: state.Dexterity - 1
        };
      }
      case 'increased_Constitution': {
        return {
            ...state,
            Constitution: state.Constitution,
            Constitution: state.Constitution + 1
        };
      }
      case 'decreased_Constitution': {
        return {
            ...state,
            Constitution: state.Constitution,
            Constitution: state.Constitution - 1
        };
      }
      case 'increased_Intelligence': {
        return {
            ...state,
            Intelligence: state.Intelligence,
            Intelligence: state.Intelligence + 1
        };
      }
      case 'decreased_Intelligence': {
        return {
            ...state,
            Intelligence: state.Intelligence,
            Intelligence: state.Intelligence - 1
        };
      }
      case 'increased_Wisdom': {
        return {
            ...state,
            Wisdom: state.Wisdom,
            Wisdom: state.Wisdom + 1
        };
      }
      case 'decreased_Wisdom': {
        return {
            ...state,
            Wisdom: state.Wisdom,
            Wisdom: state.Wisdom - 1
        };
      }
      case 'increased_Charisma': {
        return {
            ...state,
            Charisma: state.Charisma,
            Charisma: state.Charisma + 1
        };
      }
      case 'decreased_Charisma': {
        return {
            ...state,
            Charisma: state.Charisma,
            Charisma: state.Charisma - 1
        };
      }
      case 'altered_strengthModifier': {
        return {
            ...state,
          strengthModifier: state.strengthModifier,
          strengthModifier: Math.floor((state.Strength - 10) / 2)
        };
      }
      case 'altered_dexterityModifier': {
        return {
            ...state,
            dexterityModifier: state.dexterityModifier,
            dexterityModifier: Math.floor((state.Dexterity - 10) / 2)
        };
      }
      case 'altered_constitutionModifier': {
        return {
            ...state,
            constitutionModifier: state.constitutionModifier,
            constitutionModifier: Math.floor((state.Constitution - 10) / 2)
        };
      }
      case 'altered_intelligenceModifier': {
        return {
            ...state,
            intelligenceModifier: state.intelligenceModifier,
            intelligenceModifier: Math.floor((state.Intelligence - 10) / 2)
        };
      }
      case 'altered_wisdomModifier': {
        return {
            ...state,
            wisdomModifier: state.wisdomModifier,
            wisdomModifier: Math.floor((state.Wisdom - 10) / 2)
        };
      }
      case 'altered_charismaModifier': {
        return {
            ...state,
            charismaModifier: state.charismaModifier,
            charismaModifier: Math.floor((state.Charisma - 10) / 2)
        };
      }
      case 'close_requirements': {
        return {
            ...state,
            visible: state.visible,
            visible: false
        };
      }
      case 'switch_visibility': {
        return {
            ...state,
            visible: state.visible,
            visible: !state.visible
        };
      }
      case 'change_class_type_to_barbarian': {
        return {
            ...state,
            classType: state.classType,
            classType: 'Barbarian'
        };
      }
      case 'change_class_type_to_wizard': {
        return {
            ...state,
            classType: state.classType,
            classType: 'Wizard'
        };
      }
      case 'change_class_type_to_bard': {
        return {
            ...state,
            classType: state.classType,
            classType: 'Bard'
        };
      }
      case 'change_requirements_to_barbarian': {
        return {
            ...state,
            classRequirements: state.classRequirements,
            classRequirements: Object.entries(CLASS_LIST.Barbarian)
        };
      }
      case 'change_requirements_to_wizard': {
        return {
            ...state,
            classRequirements: state.classRequirements,
            classRequirements: Object.entries(CLASS_LIST.Wizard)
        };
      }
      case 'change_requirements_to_bard': {
        return {
            ...state,
            classRequirements: state.classRequirements,
            classRequirements: Object.entries(CLASS_LIST.Bard)
        };
      }
    }
    throw Error('Unknown action: ' + action.type);
  }