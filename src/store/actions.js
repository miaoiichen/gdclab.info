export default{
  handleMenuOpen(context){
    const bool = !context.state.isOpen;
    context.commit("handleOpenState",bool);
  }
}