class AddColumnToBenches < ActiveRecord::Migration[5.1]
  def change
    add_column :benches, :number_of_seats, :integer
  end
end
