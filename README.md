# Suitest JavaScript API demo - Cucumber integration

This repository contains a demo of [Suitest JS API](https://github.com/SuitestAutomation/suitest-js-api) end-to-end tests using the [Cucumber test runner](https://cucumber.io/).

## Setup

### 1. Configure Suitest credentials

Copy `.suitestrc.dist` to `.suitestrc` in the project root and fill in the required values according to the [Suitest environment setup documentation](https://suite.st/docs/suitest-api/setup/#environment-setup).

The `.suitestrc.dist` file is a template. The actual `.suitestrc` file is your local configuration and should not be committed if it contains credentials or other sensitive values.

### 2. Install dependencies

Run the following command in the project root:

```bash
npm ci
```

### 3. Choose how to run the tests

This repository includes example configurations for running tests on a single device or multiple devices in parallel. You can find them in `config-examples/`.

#### Single-device execution

Run the end-to-end tests using the default configuration:

```bash
npm run start
```

The default configuration specifies a single `deviceId` and `appConfigId`.

#### Parallel execution

Run the end-to-end tests using the parallel configuration:

```bash
npm run parallel
```

The parallel configuration uses `presets` to define the device configurations for the run. Each preset can specify the relevant device and application configuration.

The parallel scripts use `config-examples/.suitestrc.parallel.json` explicitly. Make sure this configuration and its inherited configuration files contain the correct values for your environment.

**Important:** Explicit `deviceId` and `appConfigId` values take precedence over presets. To run tests using presets, do not specify these values at the top level of the effective configuration.

The parallel scripts also use the `SUITEST_DEVICE_ID` environment variable to name the JSON report generated for each device. The Windows-specific `parallel:smoke:windows` script uses Windows environment variable syntax.

## Configuration files

The `config-examples/` directory contains the following example files:

| File | Purpose |
| --- | --- |
| `.suitestrc.base.json` | Shared Suitest credentials (`tokenId` and `tokenPassword`) |
| `.suitestrc.json` | Example configuration for running tests on a single device |
| `.suitestrc.parallel.json` | Example configuration for running tests on multiple devices using presets |

The example configurations use `extends` to inherit shared settings from `.suitestrc.base.json`, avoiding duplication of credentials across configuration files.

The `extends` value is a path to another configuration file, resolved relative to the directory containing the configuration file that declares it. Relative paths can point to files in the same directory or elsewhere in the project.

These files are examples for reference. Adapt them to your environment before running tests.

## Available commands

| Command | Description |
| --- | --- |
| `npm run start` | Run end-to-end tests and generate a JSON report |
| `npm run start:junit` | Run end-to-end tests and generate a JUnit XML report |
| `npm run start:home` | Run tests tagged `@e2e` and `@home` |
| `npm run start:video` | Run tests tagged `@e2e` and `@video` |
| `npm run start:smoke` | Run smoke tests |
| `npm run parallel` | Run end-to-end tests using the parallel configuration |
| `npm run parallel:smoke` | Run smoke tests using the parallel configuration |
| `npm run parallel:smoke:windows` | Run parallel smoke tests using Windows environment variable syntax |
| `npm run report:html` | Generate an HTML report using `report.js` |

## Test reports

Test reports are written to the `report/` directory.

- The standard test commands generate `cucumber_report.json`.
- The `start:junit` command generates `cucumber_report.xml` in JUnit format.
- The parallel commands generate separate JSON report files named using `SUITEST_DEVICE_ID`.

To generate the HTML report, run:

```bash
npm run report:html
```

Make sure the required JSON report files exist before generating the HTML report.

## Example tests

The repository contains Suitest tests for the WatchMe app, which is available by default in every Suitest account.

The tests rely on elements defined in the Suitest Element Repository and on an application configuration whose base URL is set to [https://watchme.suite.st/hbbtv.html](https://watchme.suite.st/hbbtv.html). This corresponds to the HbbTV configuration in the WatchMe app.

Make sure your Suitest device, application configuration, credentials, and Element Repository are set up correctly before running the tests.