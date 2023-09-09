class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :netid
      t.integer :points
      t.integer :reports
      t.references :dorm, foreign_key: true

      t.timestamps
    end
  end
end
