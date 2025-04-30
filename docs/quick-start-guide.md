# NeuronOS Quick Start Guide

Welcome to NeuronOS! This guide will help you get started with your new data science and AI-focused operating system.

## First Steps

After installing NeuronOS and logging in for the first time, you'll see the welcome screen. Here's what to do next:

### 1. Explore the Desktop

NeuronOS features a clean, modern desktop environment designed for productivity:

- **Application Menu**: Click the menu icon in the bottom-left corner to access all installed applications
- **Dock**: Quick access to your most-used applications
- **System Tray**: Access system settings, network, and other utilities
- **Workspaces**: Use multiple virtual desktops to organize your work

### 2. Connect to the Internet

If you haven't connected to the internet during installation:

1. Click on the network icon in the system tray
2. Select your Wi-Fi network
3. Enter your password when prompted

### 3. Update Your System

It's a good idea to update your system to get the latest packages:

1. Open a terminal (click the terminal icon in the dock or press `Ctrl+Alt+T`)
2. Run the following commands:
   ```bash
   sudo apt update
   sudo apt upgrade
   ```

## Data Science & AI Tools

NeuronOS comes with a comprehensive suite of pre-installed tools for data science and AI development.

### Jupyter Lab

Jupyter Lab is an interactive development environment for notebooks, code, and data:

1. Launch Jupyter Lab from the application menu or dock
2. Alternatively, open a terminal and run:
   ```bash
   jupyter-lab
   ```
3. Jupyter Lab will open in your default web browser
4. Create a new notebook by clicking the Python 3 icon under "Notebook"

### VS Code

Visual Studio Code is a powerful code editor with excellent support for Python and data science:

1. Launch VS Code from the application menu or dock
2. Install the Python extension if not already installed
3. Open a folder for your project
4. Create a new file with a `.py` extension
5. Start coding!

### Python Libraries

NeuronOS includes popular Python libraries for data science and AI:

- **Data Analysis**: pandas, NumPy, SciPy
- **Machine Learning**: scikit-learn, XGBoost, LightGBM
- **Deep Learning**: TensorFlow, PyTorch, Keras
- **NLP**: Hugging Face Transformers, spaCy, NLTK
- **Visualization**: Matplotlib, Seaborn, Plotly

To check available packages, open a Python console and try importing them:

```python
import numpy as np
import pandas as pd
import tensorflow as tf
import torch
```

### Example Applications

NeuronOS includes example applications to help you get started:

1. Open the application menu
2. Look for the "Examples" category
3. Try the Streamlit, Gradio, and Hugging Face examples

## Working with Data

### Accessing Files

1. Open the file manager from the dock or application menu
2. Your home directory contains folders for Documents, Downloads, etc.
3. The `Projects` folder is recommended for your data science projects

### Importing Data

You can import data from various sources:

- **Local Files**: Use the file manager to copy files to your Projects folder
- **Cloud Storage**: Install cloud storage clients from the Software Center
- **Databases**: Use pre-installed database connectors in Python

### Data Visualization

Try these visualization tools:

1. **Matplotlib/Seaborn in Jupyter**: Create plots directly in notebooks
2. **Plotly**: Create interactive visualizations
3. **Streamlit**: Build data apps with minimal code

## Performance Optimization

NeuronOS includes performance profiles to optimize your system for different workloads:

- **Performance**: Maximizes performance for intensive workloads
- **Balanced**: Default profile with a good balance of performance and power efficiency
- **Power Save**: Optimizes for battery life on laptops

To switch profiles, use the `neuronos-profile` command:

```bash
sudo neuronos-profile performance
```

## GPU Acceleration

If your system has an NVIDIA GPU, NeuronOS is configured to use it for AI workloads:

1. Check GPU status:
   ```bash
   nvidia-smi
   ```

2. Test GPU in TensorFlow:
   ```python
   import tensorflow as tf
   print("GPU Available:", tf.config.list_physical_devices('GPU'))
   ```

3. Test GPU in PyTorch:
   ```python
   import torch
   print("GPU Available:", torch.cuda.is_available())
   print("GPU Device:", torch.cuda.get_device_name(0) if torch.cuda.is_available() else "None")
   ```

## Customization

### Desktop Appearance

1. Right-click on the desktop and select "Desktop Settings"
2. Change wallpaper, colors, and other appearance settings

### Application Preferences

Most applications have their own preference settings:

1. Open the application
2. Look for "Preferences", "Settings", or a gear icon
3. Adjust settings to your liking

### System Settings

1. Open the System Settings application from the application menu
2. Explore categories like Display, Keyboard, Power, etc.
3. Adjust settings to optimize your workflow

## Getting Help

If you need assistance with NeuronOS:

- **Documentation**: Check the built-in help system or online documentation
- **Community**: Join our Discord server or forum for community support
- **GitHub**: Report issues or contribute to the project on GitHub

## Next Steps

Now that you're familiar with the basics, here are some next steps:

1. **Create Your First Project**: Set up a data science project in the Projects folder
2. **Explore Example Applications**: Try the pre-installed example applications
3. **Install Additional Tools**: Use the Software Center to install additional tools
4. **Join the Community**: Connect with other NeuronOS users to share tips and get help

Happy data science and AI development with NeuronOS!
