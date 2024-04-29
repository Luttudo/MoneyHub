function signIn() {
  const email = document.getElementById("floatingInput").value;
  const password = document.getElementById("floatingPassword").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Usuário autenticado com sucesso
      const user = userCredential.user;
      console.log("Usuário autenticado:", user);
      // Redirecione para a página desejada
    })
    .catch((error) => {
      // Trate erros de autenticação
      console.error("Erro ao autenticar:", error.message);
    });
}
