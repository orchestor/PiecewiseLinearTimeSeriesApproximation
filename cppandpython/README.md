## Documentation radar signal segmentation code
Nov 10 2018
Lin Wang



1) import_data.py
This script import, clean and load the raw CSV file to txt format for future segmentation.
To use the C++ command line utility:

2) segmentandplot_tv.py" script as an example:
  python segmentandplot_tv.py tv.txt 10

  Note:  You need install GnuPlot. After installing ggplot, you need
  go to .../site-packages/ggplot/stats/smoothers.py and change
  from pandas.lib import Timestamp
  to
  from pandas import Timestamp

  For Mac user, you aslo need install gnuplot-py :
  pip install http://prdownloads.sourceforge.net/gnuplot-py/gnuplot-py-1.8.tar.gz?download
