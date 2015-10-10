<form onSubmit={this.addTransactionHandler.bind(this)}>
        <input type="text" placeholder="description" ref="description" />
        <input type="text" placeholder="amount" ref="amount" />
        <input type="submit"/>
      </form>