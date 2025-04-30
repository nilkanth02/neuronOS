# NeuronOS Development Guide

This guide provides information for developers who want to contribute to the NeuronOS project.

## Development Environment Setup

### Prerequisites

To contribute to NeuronOS development, you'll need:

1. A Linux development environment (Ubuntu 22.04 or newer recommended)
2. Git for version control
3. Basic knowledge of shell scripting
4. Familiarity with Debian/Ubuntu package management
5. Understanding of ISO building tools

### Setting Up Your Development Environment

```bash
# Update your system
sudo apt update && sudo apt upgrade -y

# Install essential tools
sudo apt install -y git debootstrap squashfs-tools xorriso isolinux \
    syslinux-utils grub-pc-bin grub-efi-amd64-bin mtools

# For GUI ISO customization (optional)
sudo apt install -y cubic
```

### Cloning the Repository

```bash
git clone https://github.com/yourusername/neuronos.git
cd neuronos
```

## Project Structure

- **build/**: Contains scripts for building the ISO image
- **config/**: Configuration files for the system
- **packages/**: Lists and installation scripts for packages
  - **ai/**: AI-related packages (PyTorch, TensorFlow, etc.)
  - **ds/**: Data Science packages (Pandas, Jupyter, etc.)
  - **system/**: Core system packages
- **ui/**: UI customization files
- **docs/**: Documentation
- **tools/**: Utility scripts and tools
- **scripts/**: Automation scripts

## Development Workflow

### 1. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
```

### 2. Make Your Changes

Depending on what you're working on, you might need to modify:

- Package lists in `packages/*/package-list.txt`
- Installation scripts in `packages/`
- UI customization in `ui/`
- System configuration in `config/`
- Build scripts in `build/`

### 3. Test Your Changes

You can test your changes by building a custom ISO:

```bash
# Make the build script executable
chmod +x build/build-iso.sh

# Run the build script
./build/build-iso.sh
```

Test the resulting ISO in a virtual machine before submitting your changes.

### 4. Commit Your Changes

```bash
git add .
git commit -m "Add your feature description"
```

### 5. Push Your Changes and Create a Pull Request

```bash
git push origin feature/your-feature-name
```

Then, go to the GitHub repository and create a pull request.

## Adding New Packages

To add new packages to NeuronOS:

1. Identify which category the package belongs to (ai, ds, system)
2. Add the package name to the appropriate `package-list.txt` file
3. If the package requires special installation steps, update the installation script

Example:

```bash
# Add a new AI package
echo "python3-new-ai-package" >> packages/ai/package-list.txt

# If special installation is needed, update the installation script
nano packages/install-packages.sh
```

## Customizing the UI

To customize the UI:

1. Modify the theme configuration in `ui/theme-config.sh`
2. Add custom wallpapers or icons to the `ui/` directory
3. Update the SDDM (login manager) configuration

## Building a Custom ISO

The main build script is located in `build/build-iso.sh`. You can customize it to change how the ISO is built.

For a more user-friendly approach, you can use Cubic (Custom Ubuntu ISO Creator):

```bash
sudo apt install cubic
cubic
```

Then follow the GUI instructions to customize the ISO.

## Debugging

If you encounter issues during development:

1. Check the log files in `/var/log/neuronos-*.log`
2. Use the `chroot` environment for testing changes without rebuilding the entire ISO
3. Test in a virtual machine before deploying to real hardware

## Contributing Guidelines

1. Follow the existing code style
2. Write clear commit messages
3. Document your changes
4. Test thoroughly before submitting a pull request
5. Be respectful and constructive in discussions

## Getting Help

If you need assistance with development:

- Join the developer chat on Matrix: [#neuronos-dev:matrix.org](https://matrix.to/#/#neuronos-dev:matrix.org)
- Ask questions on the GitHub Discussions page
- Check the existing issues on GitHub for similar problems
