function convertSpecial({
  id, name, icon, description = 'Описание недоступно',
}) {
  return {
    id, name, icon, description,
  };
}

export default function chooseAttack({ special }) {
  return special.map(convertSpecial);
}
