class CreateDorms < ActiveRecord::Migration[7.0]
  def change
    create_table :dorms do |t|
      t.string :name
      t.string :num_student

      t.timestamps
    end
  end
end
