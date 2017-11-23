class BankAccount
    
    attr_reader :names, :type, :company, :balance
    
    def initialize(names: [], type:, company:, balance:)
      @names = names
      @type = type
      @company = company
      @balance = balance
    end
    
    def deposit_money(amount)
      @balance += amount
    end
    
    def withdraw_money(amount)
      @balance -= amount
    end
    
    def change_type_of_account(new_account_type)
      @type = new_account_type
    end
    
    def add_name(new_name)
      @names << new_name unless @names.include?(new_name)
    end
    
    def display_info
      account_owners = @names
      p "This #{@company} #{@type} account is owned by #{account_owners}."
      p "Your current balance is $#{@balance}."
    end
    
  end
  
  account1 = BankAccount.new(names: ["Don"], type: "Standard Checking", company: "BOFA", balance: 0)
  
  account1.deposit_money(150)
  
  account1.change_type_of_account("Rewards")
  
  account1.add_name("Ian")
  
  account1.withdraw_money(100)
  
  account1.display_info
