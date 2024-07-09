import { Command } from "commander";
const program = new Command();

program
  .name("scrum")
  .description("Scrum is a CLI tool for managing your scrum board")
  .version("0.1.0");

// Create product
// scrum product create --name "My Product" --key "MP" --description "My First Product"`
const product = program.command("product");
product
  .command("create")
  .description("Create a new product")
  .option("-n, --name <name>", "The name of the product")
  .option("-p, --product-key <product_key>", "The key of the product")
  .option("-d, --description <description>", "The description of the product")
  .action((options) => {
    console.log("product create", JSON.stringify(options));
  });

product
  .command("backlog")
  .description("View the product backlog")
  .option("-p, --product-key <product_key>", "The key of the product")
  .action((options) => console.log("backlog", JSON.stringify(options)));

const sprint = program.command("sprint");
sprint
  .command("create")
  .description("Create a sprint")
  .option("-n, --name <name>", "The name of the Sprint")
  .option("-p, --product-key <product_key>", "The key of the product")
  .action((options) => {
    console.log("sprint create", JSON.stringify(options));
  });

sprint
  .command("list")
  .description("List all sprints")
  .action(() => {
    console.log("sprint list");
  });

sprint
  .command("view")
  .description("View a sprint")
  .option("-n, --name <name>", "The name of the sprint")
  .action((options) => {
    console.log("sprint view", JSON.stringify(options));
  });

sprint
  .command("update")
  .description("Update a sprint")
  .option("-n, --name <name>", "The name of the sprint")
  .option("-i, --issues <issues>", "The issues to add to the sprint")
  .action((options) => {
    console.log("sprint update", JSON.stringify(options));
  });

const issue = program.command("issue");
issue
  .command("create")
  .description("Create an issue")
  .option("-p, --product-key <product_key>", "The key of the product")
  .option("-t, --type <type>", "The type of the issue")
  .option("-n, --name <name>", "The name of the issue")
  .option("-d, --description <description>", "The description of the issue")
  .action((options) => {
    console.log("issue create", JSON.stringify(options));
  });

issue
  .command("view")
  .description("View an issue")
  .option("-i, --issue-key <issue_key>", "The key of the issue")
  .action((options) => {
    console.log("issue view", JSON.stringify(options));
  });

issue
  .command("update")
  .description("Update an issue")
  .option("-i, --issue-key <issue_key>", "The key of the issue")
  .option("-a, --assignee <assignee>", "The assignee of the issue")
  .option("-s, --status <status>", "The status of the issue")
  .option("-p, --points <points>", "The points of the issue")
  .action((options) => {
    console.log("issue update", JSON.stringify(options));
  });

issue
  .command("close")
  .description("Close an issue")
  .option("-i, --issue-key <issue_key>", "The key of the issue")
  .action((options) => {
    console.log("issue close", JSON.stringify(options));
  });

program.parse(process.argv);
