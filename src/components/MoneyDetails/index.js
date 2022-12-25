import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props

  return (
    <div className="multi-Card-container">
      <div className="Multi-card1">
        <div className="image-Container">
          <img
            alt="balance"
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          />
        </div>
        <div>
          <p className="your-balance">Your Balance</p>
          <p className="balance-amount" testid="balanceAmount">
            Rs {balanceAmount}
          </p>
        </div>
      </div>
      <div className="Multi-card2">
        <div className="image-Container">
          <img
            alt="income"
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          />
        </div>
        <div>
          <p className="your-balance">Your Income</p>
          <p className="balance-amount" testid="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </div>
      <div className="Multi-card3">
        <div className="image-Container">
          <img
            alt="expenses"
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          />
        </div>
        <div>
          <p className="your-balance">Your Expenses</p>
          <p className="balance-amount" testid="expensesAmount">
            Rs {expensesAmount}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
