"use client";

import { useState } from "react";
import { Copy, Download, Edit2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { GeneratedObituary } from "@/types";
import { format } from "date-fns";

interface ObituaryPreviewProps {
  obituary: GeneratedObituary;
  onReset: () => void;
}

export function ObituaryPreview({ obituary, onReset }: ObituaryPreviewProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(obituary.text);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(editedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([editedText], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "obituary.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    if (printWindow) {
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Obituary</title>
            <style>
              body {
                font-family: Georgia, serif;
                line-height: 1.8;
                max-width: 800px;
                margin: 40px auto;
                padding: 20px;
                color: #333;
              }
              h1 {
                text-align: center;
                margin-bottom: 30px;
                font-size: 24px;
              }
              p {
                margin-bottom: 15px;
                text-align: justify;
              }
              @media print {
                body {
                  margin: 0;
                  padding: 20px;
                }
              }
            </style>
          </head>
          <body>
            <h1>Obituary</h1>
            ${editedText.split('\n\n').map(para => `<p>${para}</p>`).join('')}
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle>Generated Obituary</CardTitle>
              <CardDescription>
                Generated on {format(obituary.generatedAt, "PPpp")}
              </CardDescription>
            </div>
            <Badge variant="secondary" className="ml-2">
              AI Generated
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {isEditing ? (
            <div className="space-y-4">
              <Textarea
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
                rows={20}
                className="font-serif text-base leading-relaxed"
              />
              <div className="flex gap-2">
                <Button onClick={() => setIsEditing(false)} variant="outline">
                  Done Editing
                </Button>
                <Button
                  onClick={() => {
                    setEditedText(obituary.text);
                    setIsEditing(false);
                  }}
                  variant="ghost"
                >
                  Reset Changes
                </Button>
              </div>
            </div>
          ) : (
            <div className="prose prose-lg max-w-none">
              <div className="whitespace-pre-wrap font-serif text-base leading-relaxed text-gray-800">
                {editedText}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="flex flex-wrap gap-2">
        <Button onClick={handleCopy} variant="outline" className="flex-1 sm:flex-none">
          {copied ? (
            <>
              <Check className="mr-2 h-4 w-4" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="mr-2 h-4 w-4" />
              Copy to Clipboard
            </>
          )}
        </Button>

        <Button onClick={() => setIsEditing(!isEditing)} variant="outline" className="flex-1 sm:flex-none">
          <Edit2 className="mr-2 h-4 w-4" />
          {isEditing ? "Cancel Edit" : "Edit Text"}
        </Button>

        <Button onClick={handleDownload} variant="outline" className="flex-1 sm:flex-none">
          <Download className="mr-2 h-4 w-4" />
          Download
        </Button>

        <Button onClick={handlePrint} variant="outline" className="flex-1 sm:flex-none">
          Print
        </Button>

        <Button onClick={onReset} variant="secondary" className="flex-1 sm:flex-none ml-auto">
          Create New Obituary
        </Button>
      </div>
    </div>
  );
}
