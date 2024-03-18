const validarCep = async (cep: string): Promise<boolean> => {
  try {
    const response = await fetch(`http://localhost:3000/users/zip/${cep}`);
    if (!response.ok) {
      throw new Error("Erro ao validar o CEP");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao validar o CEP:", error);
    return false;
  }
};
export default validarCep;
