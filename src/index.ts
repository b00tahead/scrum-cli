import { Command } from "commander";
const program = new Command();

program
  .name("scrum")
  .description("Scrum is a CLI tool for managing your scrum board")
  .version("0.1.0");

// Create product
// scrum product create --name "My Product" --key "MP" --description "My First Product"`

program.command("product:create")
  .description("Create a new product")
  .option("-n, --name <name>", "The name of the product")
  .option("-p, --product-key <product_key>", "The key of the product")
  .option("-d, --description <description>", "The description of the product")
  .action((options) => {
    console.log(JSON.stringify(options));
  });

program.parse();
