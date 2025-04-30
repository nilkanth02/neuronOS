# NeuronOS Installation Guide

This guide will walk you through the process of installing NeuronOS on your computer.

## System Requirements

- **CPU**: 64-bit processor (x86_64), 2+ cores recommended
- **RAM**: 4 GB minimum, 8 GB or more recommended for AI workloads
- **Disk Space**: 20 GB minimum, 50 GB or more recommended
- **GPU**: NVIDIA GPU recommended for AI workloads (but not required)
- **Display**: 1024x768 or higher resolution

## Installation Methods

### Method 1: Installing from ISO

1. **Download the ISO**:
   - Download the latest NeuronOS ISO from the official website or GitHub releases page.

2. **Create a Bootable USB Drive**:
   - On Windows: Use [Rufus](https://rufus.ie/) or [Etcher](https://www.balena.io/etcher/) to create a bootable USB drive.
   - On Linux: Use the `dd` command or Etcher.
   - On macOS: Use Etcher.

3. **Boot from the USB Drive**:
   - Restart your computer and boot from the USB drive.
   - You may need to change the boot order in your BIOS/UEFI settings.

4. **Start the Installation**:
   - Once booted into the live environment, click on the "Install NeuronOS" icon on the desktop.

5. **Follow the Installation Wizard**:
   - Select your language, keyboard layout, and timezone.
   - Choose your installation type (erase disk or install alongside other OS).
   - Create your user account and password.
   - Wait for the installation to complete.

6. **Restart Your Computer**:
   - After the installation is complete, restart your computer.
   - Remove the USB drive when prompted.

7. **First Boot**:
   - Log in with the username and password you created during installation.
   - Follow the first-run setup wizard to configure your system.

### Method 2: Using a Virtual Machine

1. **Download the ISO**:
   - Download the latest NeuronOS ISO from the official website or GitHub releases page.

2. **Create a New Virtual Machine**:
   - Using VirtualBox, VMware, or your preferred virtualization software, create a new VM.
   - Allocate at least 2 CPU cores, 4 GB RAM, and 20 GB disk space.

3. **Mount the ISO**:
   - Configure the VM to boot from the NeuronOS ISO.

4. **Start the VM and Install**:
   - Start the VM and follow the installation wizard as described in Method 1.

## Post-Installation Setup

### Updating the System

```bash
sudo apt update
sudo apt upgrade
```

### Installing Additional Software

NeuronOS comes with many pre-installed tools for AI and Data Science, but you can install additional software using:

```bash
sudo apt install package-name
```

Or using the Software Center application.

### Setting Up Development Environments

NeuronOS includes Python with many data science libraries pre-installed. You can create virtual environments for your projects:

```bash
# Create a new virtual environment
python -m venv ~/projects/myproject/venv

# Activate the virtual environment
source ~/projects/myproject/venv/bin/activate

# Install additional packages
pip install package-name
```

## Troubleshooting

### Boot Issues

If you encounter issues booting NeuronOS:

1. Try booting with the "Safe Graphics" option from the boot menu.
2. Check that Secure Boot is disabled in your BIOS/UEFI settings.

### Hardware Compatibility

If you experience hardware compatibility issues:

1. Check for updated drivers in the Software & Updates application.
2. Visit the NeuronOS forum or GitHub issues page for help.

### Performance Issues

If NeuronOS is running slowly:

1. Check system resources using the System Monitor application.
2. Consider adding more RAM or using a faster storage device.
3. For AI workloads, consider using a computer with an NVIDIA GPU.

## Getting Help

- Visit the NeuronOS website: [https://neuronos.org](https://neuronos.org)
- Join the community forum: [https://forum.neuronos.org](https://forum.neuronos.org)
- Report issues on GitHub: [https://github.com/neuronos/neuronos/issues](https://github.com/neuronos/neuronos/issues)
