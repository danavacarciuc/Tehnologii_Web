class Software {
  constructor(name) {
    this.name = name;
  }
  run() {
    console.log(`${this.name} is running`);
  }
}

// Plugin
class Plugin {
  constructor(name) {
    this.name = name;
  }
  run() {
    console.log(`Plugin "${this.name}" is active`);
  }
}

class Browser extends Software {
  constructor(name) {
    super(name);
    this.plugins = [];
  }

  installPlugin(plugin) {
    if (!(plugin instanceof Plugin)) {
      throw new TypeError("Only Plugin instances can be installed");
    }
    this.plugins.push(plugin);
    console.log(`Installed plugin: ${plugin.name}`);
  }

  run() {
    super.run();
    for (const p of this.plugins) p.run();
  }

  listPlugins() {
    return this.plugins.map((p) => p.name);
  }
}

// Demo
const chrome = new Browser("Chromium");
chrome.installPlugin(new Plugin("AdBlock"));
chrome.installPlugin(new Plugin("DevTools Helper"));

chrome.run();
