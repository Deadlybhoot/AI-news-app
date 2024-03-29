import React from 'react';

class Download extends React.Component {
  handleDownload = async () => {
    try {
      const response = await fetch('https://www.specialagentsqueaky.com/blog-post/5wmducgj/2020-10-20-creating-horizontal-audio-visualizer-step-by-step-from-scratch/');
      const htmlContent = await response.text();

      // Create a Blob from the HTML content
      const blob = new Blob([htmlContent], { type: 'text/html' });

      // Create a temporary URL for the Blob
      const url = URL.createObjectURL(blob);

      // Create a temporary anchor element
      const a = document.createElement('a');
      a.href = url;
      a.download = 'offline_page.html'; // Specify the filename for download
      a.click(); // Programmatically click the anchor element to trigger the download

      // Clean up: Revoke the temporary URL
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading webpage:', error);
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.handleDownload}>Download Page</button>
      </div>
    );
  }
}

export default Download;
