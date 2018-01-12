class CreateDogs < ActiveRecord::Migration[5.1]
  def change
    create_table :dogs do |t|
      t.string :name, null: false
      t.string :breed, null: false
      t.string :color, null: false
      t.timestamps
    end
    add_index :dogs, :name, unique: true
  end
end
