export const uploadFile = (req, res, next) => {
  try {
    if (!req.file) {
      throw new Error("No file to upload");
    }
    res.json({
      message: "File uploaded successfully",
      file: req.file.filename,
    });
  } catch (error) {
    next(error);
  }
};

export const uploadMultipleFiles = (req, res, next) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: "No files uploaded" });
    }
    res.json({
      message: "Files uploaded successfully",
      files: req.files.map((file) => file.filename),
    });
  } catch (error) {
    next(error);
  }
};
